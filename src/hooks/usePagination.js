import { useState } from "react";
import PropTypes from "prop-types";

export function usePagination({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  // get index of first and last inoder to slice to remain with only x number
  let lastindex = postsPerPage * currentPage;
  let firstindex = lastindex - postsPerPage;
  const posts = data?.slice(firstindex, lastindex);
  const pagenumbers = [];

  for (var i = 1; i < Math.ceil(data?.length / postsPerPage); i++) {
    pagenumbers.push(i);
  }

  const changePage = (num) => setCurrentPage(num);

  return { posts, changePage, setPostsPerPage, pagenumbers };
}

usePagination.propTypes = {
  data: PropTypes.array,
};
