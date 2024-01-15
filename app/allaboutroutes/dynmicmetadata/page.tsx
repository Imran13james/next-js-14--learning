export default function myfirstwork(){
    return (
        <>
        <button className="btn w-64 rounded-full">Button</button>
        </>
    )
}

//  this is genrate the the dynamic titile for websites
export async function generateMetadata(params:any) {
    return {
      title: 'this is dynamic tile ',
    }
  }