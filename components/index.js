import dynamic from "next/dynamic";

const Card = dynamic(() => import("./Card"));
const CardList = dynamic(() => import("./CardList"));
const Header = dynamic(() => import("./Header"));
const Player = dynamic(() => import("./Player"));
const SectionCard = dynamic(() => import("./SectionCard"));
const SectionPosts = dynamic(() => import("./SectionPosts"));

export default { Card, CardList, Header, Player, SectionCard, SectionPosts };
