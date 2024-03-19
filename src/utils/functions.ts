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

    return condition ? "font-semibold" : "hover:text-blue-400"
  }