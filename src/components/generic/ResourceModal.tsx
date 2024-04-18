type ResourceModalProps = {
  title: string;
  children: React.ReactNode;
  closeModal: () => void;
  needsAnswer?: boolean;
  func?: () => void;
};

const ResourceModal: React.FC<ResourceModalProps> = ({
  children,
  closeModal,
  title,
  needsAnswer = false,
  func = () => {},
}) => {
  return (
    <div onClick={closeModal} className="shadow absolute top-0 left-0 w-full h-[3000px] flex flex-col items-center pt-36  bg-[#242424b1] z-[3000]">
      <div className=" bg-white w-[50%]" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between p-3">
            <h1 className="text-center text-2xl font-semibold">{title}</h1>
            <button onClick={closeModal} className="text-xl text-red-600 bg-white">x</button>
        </div>
        <div>{children}</div>
        {needsAnswer && <div className="flex justify-between p-3 gap-2">
          <button onClick={func} className="text-xl w-1/2 bg-slate-900 text-white rounded-xl">نعم</button>
          <button onClick={closeModal} className="text-xl  w-1/2 bg-red-600 text-white  rounded-xl">لا</button>
        </div>}
      </div>
    </div>
  );
};

export default ResourceModal;
