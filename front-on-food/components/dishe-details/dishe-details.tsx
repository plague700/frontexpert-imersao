import Styles from "./dishe-details.module.css";
import { DisheDetailsProps } from "./type";
import { IconDevilery, IconCategory, IconReviews } from "@/icons";

export function DisheDetails({type, subtitle, title}: DisheDetailsProps){

  const Icon = 
    type === "delivery"
      ? IconDevilery 
      : type === "category" 
      ? IconCategory 
      : IconReviews;

  return (
    <div className={Styles.detail}>
      <div className={Styles.icon}>
        <Icon/>
      </div>
      {subtitle && <span>{subtitle}</span>}
      {title}
    </div>
  );

}