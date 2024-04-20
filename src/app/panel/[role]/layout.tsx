import PanelList from '@/components/navigation/PanelList'
import ContextProvider from '@/lib/contextProvider'
import { ROLES } from '@/utils/const'

function layout(props:any) {
  const role:string = ROLES[props.params.role]  
  return (
    <div className="h-screen my-7 p-3 ">
      <h1 className="text-center font-bold text-2xl">لوحة التحكم - {role}</h1>
      <div className="grid grid-cols-4 h-full">
        <ContextProvider>
          <PanelList />
          <div className="col-span-3">{props.children}</div>
        </ContextProvider>
      </div>
    </div>
  );
}

export default layout