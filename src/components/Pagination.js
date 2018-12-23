import React, { Component } from "react";
import classNames from "classnames";

export default class Pagination extends Component {

    static defaultProps = {
        currentPage: 1,
        totalPages: 1,
        onPageChange: page => { }
    }

    handlePageClick = (page, e) => {
        e.preventDefault();

        this.props.onPageChange(page);
    }

    render() {
        console.log(this.props);
        const { currentPage, totalPages } = this.props;
        const wrapperPages = 2;

        const startPage = Math.max(1, currentPage - wrapperPages);
        const endPage = Math.max(Math.min(totalPages, currentPage + wrapperPages), startPage);
        const pages = Array(endPage - startPage + 1).fill().map((p, i) => startPage + i);
       /* const pages = [];
        for (let i = 1; i <= 10; i++) {
            pages.push(i);
        }*/
        const previousPage = currentPage - 1;
        const nextPage = currentPage + 1;

        return (
            <nav className="pagination">
                <a className="pagination-previous" disabled={currentPage <= 1} onClick={this.handlePageClick.bind(this, previousPage)}>Previous</a>
                <a className="pagination-next" disabled={currentPage >= totalPages} onClick={this.handlePageClick.bind(this, nextPage)}>Next</a>

                <ul className="pagination-list">
                    {currentPage > (1 + wrapperPages) && (
                        <li>
                            <a className={classNames("pagination-link", { "is-current": currentPage === 1 })}
                               onClick={this.handlePageClick.bind(this, 1)}>1</a>
                        </li>
                    )}
                    {currentPage > (1 + (wrapperPages + 1)) && (
                        <li><span className="pagination-ellipsis">&hellip;</span></li>
                    )}
                    {pages.map((page, i) => (
                        <li key={i}>
                            <a className={classNames("pagination-link", { "is-current": page === currentPage })}
                               onClick={this.handlePageClick.bind(this, page)}>{page}</a>
                        </li>
                    ))}
                    {currentPage > (1 + (wrapperPages + 1)) && (
                        <li><span className="pagination-ellipsis">&hellip;</span></li>
                    )}
                    {currentPage < (totalPages - wrapperPages) && (
                        <li>
                            <a className={classNames("pagination-link", { "is-current": currentPage === totalPages })}
                               onClick={this.handlePageClick.bind(this, totalPages)}>{totalPages}</a>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
};