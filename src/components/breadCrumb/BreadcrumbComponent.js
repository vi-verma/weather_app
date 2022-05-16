import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';


// const BreadcrumbComponent = () => {
//   return (
//     <Breadcrumb>
//       <Breadcrumb.Item>
//         <Link to={'/home'}>Home</Link>
//       </Breadcrumb.Item>
//       <Breadcrumb.Item>
//         <Link to={`/information`}>Information</Link>
//       </Breadcrumb.Item>
//       <Breadcrumb.Item>
//        <Link to={`about`}>About</Link>
//       </Breadcrumb.Item>
//       <Breadcrumb.Item>
//         <Link to={`/weather`}>Weather</Link>
//       </Breadcrumb.Item>
//   </Breadcrumb>
//   )
// }


// export default BreadcrumbComponent;


  // const breadcrumbNameMap = {
  //   '/apps': 'Application List',
  //   '/apps/1': 'Application1',
  //   '/apps/2': 'Application2',
  //   '/apps/1/detail': 'Detail',
  //   '/apps/2/detail': 'Detail',
  // };

const BreadcrumbComponent = () => {
const location = useLocation();
const pathSnippets = location.pathname.split('/').filter(i => i);

const extraBreadcrumbItems = pathSnippets.map((_, index) => {
  const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
  console.log(url);
  return (
    <Breadcrumb.Item  key={url}>
      {/* <Link to={url}>{breadcrumbNameMap[url]}</Link> */}
      <Link to={url}>{url}</Link>
    </Breadcrumb.Item>
  );
});

return( 
  <Breadcrumb style={{margin: '12px'}}>
    {extraBreadcrumbItems}
  </Breadcrumb>
)}

export default BreadcrumbComponent;