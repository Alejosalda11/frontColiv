import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [{
  id: "user",
  icon: "iconsminds-male",
  label: "User",
  to: "/user/login",
  subs: [{
    icon: "simple-icon-user-following",
    label: "menu.login",
    to: "/user/login",
    newWindow: true
  }, {
    icon: "simple-icon-user-follow",
    label: "menu.register",
    to: "/user/register",
    newWindow: true
  }, {
    icon: "simple-icon-user-unfollow",
    label: "menu.forgot-password",
    to: "/user/forgot-password",
    newWindow: true
  },
  {
    icon: "simple-icon-user-following",
    label: "menu.reset-password",
    to: "/user/reset-password",
    newWindow: true
  }
  ]
},
{
  id: "coliv",
  icon: "iconsminds-hotel",
  label: "Coliv",
  to: `${adminRoot}/piaf`,
  subs: [{
    icon: "simple-icon-paper-plane",
    label: "menu.start",
    to: `${adminRoot}/coliv/start`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },
  ]
},
{
  id: "service-room",
  icon: "iconsminds-bikini",
  label: "Service Room",
  to: `${adminRoot}/service-room`,
  subs: [{
    icon: "simple-icon-paper-plane",
    label: "Service Room",
    to: `${adminRoot}/service-room/second`,
  },
  ]
}/*,
{
  id: "single",
  icon: "iconsminds-folders",
  label: "Reserve",
  to: `${adminRoot}/single`,
}/*,
{
  id: "docs",
  icon: "iconsminds-bikini",
  label: "Service Room",
  to: "",
  newWindow: true
}*/
];
export default data;
