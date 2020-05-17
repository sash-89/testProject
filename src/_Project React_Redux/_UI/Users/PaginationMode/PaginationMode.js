import React, {useMemo} from 'react';
import style from './PaginationMode.module.css'
import Pagination from "react-js-pagination";



const PaginationMode = React.memo(({pageSize, currentPage,  totalUsersCount, handlePageChange}) => {
const memo =useMemo(()=> Math.ceil( totalUsersCount/pageSize), [totalUsersCount, pageSize])

    return (
        <div>
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={pageSize}
                totalItemsCount={totalUsersCount}
                pageRangeDisplayed={10}
                itemClassFirst={ currentPage === 1 ? style.WrapPagin : null}
                itemClassLast={ currentPage === memo ? style.WrapPagin : null}
                onChange={handlePageChange}
                innerClass={style.WrapperPagin}
                itemClass={style.itemClassPagin}
                linkClass={style.linkClassPagin}
                activeLinkClass={style.activeLinkClassPagin}
            />
        </div>
    )

}
);


export default PaginationMode;
