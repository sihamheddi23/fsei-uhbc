import { FACULTY_API_BASE_ENDPOINT } from '@/utils/const';
import React from 'react'

const ShowFile = (props: any) => {
        const url = props.data.document_url || props.data.pdf_url || null
        return (<div>
          {
            url ?  <a
            className="text-blue-500 flex gap-1 items-center"
            href={FACULTY_API_BASE_ENDPOINT+"/"+url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-eye"></i>
             <span>عرض الملف</span>
            </a> :
            <span className="text-center">لا يوجد ملف</span>
          }
        </div>
          

        );
      }
export default ShowFile