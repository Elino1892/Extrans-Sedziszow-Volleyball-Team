import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import ArticleItem from "../../components/News/ArticleItem.js/ArticleItem";

import { getNewsDetails, listNews } from "../../store/actions/newsActions";
import LoadingCover from '../../components/UI/LoadingCover/LoadingCover'

import { NEWS_CREATE_COMMENT_RESET, NEWS_DETAILS_RESET } from "../../constants/newsConstants";

const ArticleItemPage = () => {

  const params = useParams();
  const { articleId } = params;

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const newsDetails = useSelector(state => state.newsDetails);
  const { news, loading, error } = newsDetails;

  const newsCommentCreate = useSelector(state => state.newsCommentCreate);
  const { loading: loadingCommentCreate, error: errorCommentCreate, success: successCommentCreate } = newsCommentCreate;

  const newsCommentDelete = useSelector(state => state.newsCommentDelete);
  const { loading: loadingCommentDelete, error: errorCommentDelete, success: successCommentDelete } = newsCommentDelete;


  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Aktualności - Extrans Sędziszów Małopolski"
    window.scrollTo(0, 0)
    dispatch(getNewsDetails(articleId));

    if (successCommentCreate) {
      dispatch({ type: NEWS_CREATE_COMMENT_RESET })
    }

    return () => {
      dispatch({ type: NEWS_DETAILS_RESET })
    }

  }, [dispatch, articleId, successCommentCreate, successCommentDelete])

  return (
    <>
      {!Object.keys(news).length ? <LoadingCover /> :
        <ArticleItem
          title={news.title}
          subtitle={news.subtitle}
          description={news.description}
          background={news.image}
          author={news.user}
          createdAt={news.createdAt}
          userInfo={userInfo}
          comments={news.comments}
          articleId={articleId}
        />
      }
    </>
  )
}

export default ArticleItemPage;