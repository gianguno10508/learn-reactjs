import { Markup } from 'interweave';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import '../../styles/details_post.css';
import { Link } from 'react-router-dom';
import { actSelectPost } from '../../actions';
function DetailsPosts(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
    };
    const handleItemClick = (event, index) => {
        var array_post =[{
            'id': props.posts[index].id,
            'title': props.posts[index].title.rendered,
            'content': props.posts[index].content.rendered,
            'img': props.posts[index].jetpack_featured_media_url,
        }];
        props.selectPost(array_post);
    };
    return (
        <section className='details-post'>
            <div className='content-session'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <p>Filter</p>
                        </div>
                        <div className='col-md-9'>
                            {Array.isArray(props.select_posts) && props.select_posts.length > 0 ?
                                <div className='content'>
                                    <img src={props.select_posts[0].img} />
                                    <h2 className='title'>{props.select_posts[0].title}</h2>
                                    <p className='post-content'><Markup content={props.select_posts[0].content} /></p>
                                </div>
                            : null}
                        </div>
                    </div>
                </div>
                <div className='relate-posts'>
                        <h2 className='relate-posts-title'>Related Posts</h2>
                        {Array.isArray(props.posts) && props.posts.length > 0 ?
                            <Slider {...settings}>
                                {props.posts.map((d, index) => (
                                    <div
                                        onClick={(event) => handleItemClick(event, index)}
                                        className='col-posts'
                                        key={d.id}
                                    >
                                        <Link to='/detailpost'>
                                            <div className="img-posts">
                                                <img src={d.jetpack_featured_media_url} />
                                            </div>
                                            <div className="content-posts">
                                                <div className="date-posts" data={formatDate(d.date)}>
                                                    <span className='day-blog'>
                                                        {formatDate(d.date).substring(0,2)}
                                                    </span>
                                                    <span>{toMonthName(formatDate(d.date).substring(3,5))}</span>
                                                    <span>{formatDate(d.date).substring(6,10)}</span>
                                                </div>
                                                <h4 className='title-post'>{d.title.rendered}</h4>
                                                <div className="content-excerpt">
                                                    <Markup content={d.excerpt.rendered} />
                                                </div>
                                                <Link to='/detailpost' className='btn-readmore'>Read more</Link>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </Slider>
                        : null}
                    </div>
            </div>
        </section>
    )
}
function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(0), // get only two digits
    month = datePart[1], day = datePart[2];

    return day+'/'+month+'/'+year;
}
function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', {
      month: 'long',
    });
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectPost: (data) => {
            dispatch(actSelectPost(data))
        },
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
        select_posts: state.select_post,
        posts: state.posts
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPosts);