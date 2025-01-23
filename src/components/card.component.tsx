//@ts-ignore
import styles from "../styles/components/Card.module.css";
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';

//@ts-ignore
import cardChip from "../assets/images/cardChip.png";
//@ts-ignore
import cardGroup from "../assets/images/cardGroup.png";

const CardComponent = (props: any) => {
  const { cardDetails } = props;
  const { balance, cardHolderName, validTill, cardNumber, isGradient, currency } = cardDetails;
  const gradientClass = isGradient ? styles.blackGradientCard : styles.plainCard
  const cardFooterClass = isGradient ? styles.gradientCardFooter : styles.plainCardFooter

  return (
    <div className={styles.cardWrapper}>
      <div className={gradientClass + ' ' + styles.card}>
        <div className={styles.cardHeader}>
          <div>
            <h5>Balance</h5>
            <span>{currency}{balance}</span>
          </div>
          <div className="flex items-center justify-center"  >
            <img src={cardChip} alt="cardChip" width={35} height={35}></img>
          </div>
        </div>
        <div className={styles.cardBody}>
          <div>
            <h5>CARD HOLDER</h5>
            <span>{cardHolderName}</span>
          </div>
          <div className="ml-[40px]">
            <h5>VALID THRU</h5>
            <span>{validTill}</span>
          </div>
        </div>
        <div className={cardFooterClass}>
          {cardNumber}
          <img src={cardGroup} alt="cardGroup" className="h-[19px] md:h-[30px]" ></img>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;