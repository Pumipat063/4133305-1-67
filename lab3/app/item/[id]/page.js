import TestBtn from "@/app/item/[id]/testbtn";
import Plus from "@/lib/plus"

export default function item({params}){

    const added = Plus(2,7)

    return (
        <div>
            <p>item : {params.id}</p>
            <p>{added}</p>
            <TestBtn/>
        </div>
    )
}

// export default function Item({params}){
//     return (
//         <div>
//             Item : {params.id}
//         </div>
//     )
// }