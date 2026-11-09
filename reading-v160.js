/* Preserve authored text; paginate at sentences, then clauses or word boundaries. */
function readingPages160(text,thought=false,speaker=null,options={}){
 // Inner monologue is one continuous page, preserving authored paragraph breaks.
 if(thought){const whole=String(text||'').trim();return whole?[{text:whole,thought:true,speaker:null}]:[];}
 const line=document.getElementById('line');
 const viewport=options.viewport??window.innerWidth;
 const font=options.font??(parseFloat(getComputedStyle(line).fontSize)||15);
 const width=options.width??(line.clientWidth||Math.max(200,Math.min(840,viewport-76)));
 const mobile=viewport<=760;
 const budget=Math.max(24,Math.min(mobile?90:155,Math.floor(width/font)*(mobile?3:4)));
 const weight=s=>Array.from(s).reduce((sum,c)=>sum+(/\s/.test(c)?.33:/[\x00-\x7f]/.test(c)?.55:1),0);
 const result=[];
 const add=text=>{if(text.trim())result.push({text:text.trim(),thought,speaker});};
 function chunks(sentence){
  const out=[];let rest=sentence.trim();
  while(weight(rest)>budget){
   const chars=Array.from(rest);let used=0,end=0;
   while(end<chars.length&&used+weight(chars[end])<=budget){used+=weight(chars[end]);end++;}
   const head=chars.slice(0,end).join('');
   // Prefer an existing comma/semicolon break in the latter half of the page.
   const clauses=[...head.matchAll(/[,;，；][”’」』)]*\s+/g)];
   let cut=clauses.filter(m=>weight(head.slice(0,m.index))>=budget*.48).at(-1);
   let index=cut?cut.index+cut[0].length:head.lastIndexOf(' ');
   if(index<=0){index=head.length;while(/[”’」』),.!?。！？]/.test(rest[index]||'\u0000'))index++;}
   // Do not leave a closing quotation mark or parenthesis alone on the next page.
   let next=rest.slice(index).trimStart();
   if(/^[”’」』)]+$/.test(next)){out.push(rest);rest='';break;}
   out.push(rest.slice(0,index).trim());rest=next;
  }
  if(rest)out.push(rest);return out;
 }
 for(const paragraph of String(text||'').split(/\n+/)){
  const sentences=paragraph.trim().match(/[\s\S]+?(?:[.!?。！？]+[”’」』)]*(?=\s|$)|$)/g)||[];
  let buffer='',count=0;
  for(const raw of sentences){
   const pieces=chunks(raw);if(!pieces.length)continue;
   for(let i=0;i<pieces.length;i++){
    const piece=pieces[i];
    const separator=weight(buffer)<=10?' ':'\n';
    if(buffer&&(count>=2||pieces.length>1||weight(buffer)+weight(piece)>budget)) {add(buffer);buffer='';count=0;}
    buffer+=(buffer?separator:'')+piece;count++;
    if(i<pieces.length-1){add(buffer);buffer='';count=0;}
   }
  }
  add(buffer);
 }
 return result;
}
