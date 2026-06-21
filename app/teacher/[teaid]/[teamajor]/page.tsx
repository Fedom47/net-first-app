export default async function Page({params}:{params:{teaid:string}}) {
    //decontructur แตกช้อมูลใน param เพื่อเอามาใช้
    const {teaid} = await params
    
    return (
        <div>
            {/* จุดเริ่มต้น */} 
            <h1>hello student</h1>
            <hr/>
            TEACHER ID: {teaid}
            <hr/>
            <h1>
                TEACHER MAJOR: {teaid}
            </h1>
            {/* จุดจบ*/}
        </div>
    );
}