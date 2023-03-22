import React,{ useState } from 'react';
import styles from './Pagination.module.scss'

const Pagination = ({arrayElements, elementPerPage, paginate }) => {

    const [active,setActive] = useState(1)

    function activePagination (e){
        setActive(+e.target.id)
    } 

    const pageNumbers = []

    for (let i = 0; i < Math.ceil(arrayElements.length / elementPerPage) ; i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <ul className={styles.pagination_wrapper}>
            {pageNumbers.map(element => {
                return <li key={element} id={element} className={styles.pagination_element + ' ' + ( active === element ? styles.active : false)} onClick={(e)=> {
                    paginate(element)
                    activePagination(e)
                }}>{element}</li>
            })}
        </ul>
    );
};

export default Pagination;