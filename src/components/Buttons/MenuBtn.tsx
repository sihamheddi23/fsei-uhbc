import Image from "next/image"


function MenuBtn() {
  return (
    <div className="flex gap-2 items-center">
      <Image src={"/menu-icon.svg"} alt="menu button" width={19} height={15}/>
      <h5 className="font-semibold">القـــــائـــمة</h5>
    </div>
  )
}

export default MenuBtn