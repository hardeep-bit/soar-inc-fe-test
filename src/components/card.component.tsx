//@ts-ignore
import styles from "../styles/components/Card.module.css";
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';

const CardComponent = (props: any) => {
  const { cardDetails } = props;
  const { balance, cardHolderName, validTill, cardNumber, isGradient, currency, id } = cardDetails;
  const gradientClass = isGradient ? styles.blackGradientCard : styles.plainCard
  const cardFooterClass = isGradient ? styles.gradientCardFooter : styles.plainCardFooter

  return (
    <div className={gradientClass + ' ' + styles.card}>
      <div className={styles.cardHeader}>
        <div>
          <h5>Balance</h5>
          <span>{currency}{balance}</span>
        </div>
        <div className="flex items-center justify-center">
          <CreditCardOutlinedIcon fontSize="large" />
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
        <ContactlessOutlinedIcon />
      </div>
    </div>
  );
}

export default CardComponent;