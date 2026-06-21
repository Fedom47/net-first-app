export default async function Page({params}:{params:{stuid:string}}) {
    //decontructur แตกช้อมูลใน param เพื่อเอามาใช้
    const {stuid} = await params
    
    return (
        <div>
            {/* จุดเริ่มต้น */} 
            <h1>hello student</h1>
            <hr/>
            STUDENT ID: {stuid}
            <hr/>
            <h1>WOW WOW WOW</h1>
            {/* จุดจบ*/}
        </div>
    );
}