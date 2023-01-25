import styles from "../styles/Login.module.css"
import Link from "next/link";

export default function Login(){
    return(
        <div className={styles.wrapper}>
            <div className= {styles.formControl}>
                <form>
                    <input 
                        className={styles.input} 
                        type="text" 
                        placeholder="User Name"/>
                    <input 
                        className={styles.input} 
                        type="password" 
                        placeholder="Pass Word"/>
                    
                    <Link className={styles.button} href="/">
                        Login
                    </Link>  
                    
                </form>

            </div>
        </div>
    )
}