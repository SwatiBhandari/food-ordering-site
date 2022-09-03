
  const AssignmentIcon = "https://img.icons8.com/wired/344/list--v1.png";
  const PersonIcon="https://img.icons8.com/ios-filled/344/user.png";
  const DashboardIcon='https://img.icons8.com/material-outlined/344/dashboard-layout.png';

  const Orders = "https://img.icons8.com/external-glyph-mangsaabguru-/344/external-order-shop-glyph-glyph-mangsaabguru-.png";
  const Amount="https://img.icons8.com/material-rounded/344/rupee.png";
  const Users="https://img.icons8.com/ios-glyphs/344/group.png";
    

export const SideBarData =[
    {
        icon: DashboardIcon,
        heading: "DashBoard",
        path:'/Admin'
    },
    {
        icon: AssignmentIcon,
        heading:"Orders",
        path:'/Orders'
    },
    {
        icon: PersonIcon,
        heading:"Users",
        path:'/Users'
    }
];

export const CardsData =[
    {
    title: "Orders",
    color:{
        backGround : "linear-gradiant(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        value: "25,970",
        png:Orders,
    },
    {
    title: "Amount",
    color:{
        backGround : "linear-gradiant(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        value: "25,970",
        png:Amount,
    },
    {
    title: "Users",
    color:{
        backGround : "linear-gradiant(rgb(248,212,154) -146.42, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        value: "25,970",
        png:Users,
    },
];