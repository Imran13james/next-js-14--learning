import { User } from "@/app/user/db";
import { NextResponse } from "next/server";

export function Get(req:any,content:any){
const Usersdata = User.filter((item)=>item.id==content.params.id)
return NextResponse.json(Usersdata.length==0?{result:"no user has been found",success:false}:{result:Usersdata})
}


// getting this error 
//  ⨯ No HTTP methods exported in '/home/imran-ali/Documents/nextjs/practise-app/app/api/firstapionnext/route.tsx'. Export a named export for each HTTP method.