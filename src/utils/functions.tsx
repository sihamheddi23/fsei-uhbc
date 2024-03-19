export const getClassName = (keyword: string, pathname: string, regexPattern?: string):string => {
    let condition;

    if(regexPattern){
      condition = pathname.endsWith(regexPattern)
    }
    else {
        if(keyword === "/"){
            condition = pathname === "/"
          }
          else{
            condition = pathname.includes(keyword)
          }
    }

    return condition ? "border-b-2 border-b-blue-500" : "hover:text-blue-400"
  }