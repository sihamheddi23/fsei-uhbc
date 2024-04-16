
type ResourceModalProps = {
    open:boolean,
    children: React.ReactNode,
    setOpen: (open: boolean) => void
}

const ResourceModal: React.FC<ResourceModalProps> = ({ children, open, setOpen }) => {  

  return (
    <div className="shadow absolute top-0 left-0 w-full h-[1200px] flex flex-col items-center pt-36  bg-[#4c4c4c8c] z-50">
      <div className="bg-white p-5 w-[50%]">{children}</div>
    </div>
  );
}

export default ResourceModal