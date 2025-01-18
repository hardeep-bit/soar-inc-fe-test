//@ts-ignore
import styles from "../styles/components/Header.module.css";

const HeaderComponent = (props: any) => {
  const { activeAppNavigation } = props;

  return (
    <header id={styles.header} className="p-6 border-b-[1px] border-gray-100">
      <h1 className='text-2xl font-bold text-gray-700'>
        {activeAppNavigation.appHeadLabel}
      </h1>
      <input id={styles.searchInput} placeholder="Search for something">
      </input>
    </header>
  )
}

export default HeaderComponent;