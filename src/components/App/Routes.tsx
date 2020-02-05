import React from "react";

const Home: React.FC = (): JSX.Element => {
  return <h1>Home</h1>;
};

const Standings: React.FC = (): JSX.Element => {
  return <h1>Standings</h1>;
};

const Teams: React.FC = (): JSX.Element => {
  return <h1>Teams</h1>;
};

export interface IRoute {
  path: string;
  sidebarName: string;
  component: React.ComponentType;
}

const Routes: IRoute[] = [
  {
    path: "/",
    sidebarName: "Home",
    component: Home
  },
  {
    path: "/standings",
    sidebarName: "Standings",
    component: Standings
  },
  {
    path: "/teams",
    sidebarName: "Teams",
    component: Teams
  }
];

export default Routes;
