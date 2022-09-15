import axios from 'axios';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { Markup } from 'interweave';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actPost, actSelectPost } from '../../../actions';

function Session_5(props) {
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
    const [posts, setPosts] = useState([]);
    const url = 'http://reactjswordpress.com:828/wp-json/wp/v2/posts';
    useEffect(() => {
        const fetchDataCategories = async () => {
            try {
                axios.get(url).then(function (response) {
                    setPosts(response.data);
                    props.Posts(response.data);
                }, function (error) {
                    console.log(error)
                })
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataCategories();
    }, []);
    const handleItemClick = (event, index) => {
        var array_post =[{
            'id': posts[index].id,
            'title': posts[index].title.rendered,
            'content': posts[index].content.rendered,
            'img': posts[index].jetpack_featured_media_url,
        }];
        props.selectPost(array_post);
    };
    return (
        <section className='session-home-5'>
            <div className='content-session'>
                <div className='container'>
                    <div className="posts">
                        <h2 className='title'>Latest Blogs</h2>
                        <Slider {...settings}>
                            {posts.map((d, index) => (
                                <div
                                    onClick={(event) => handleItemClick(event, index)}
                                    className='col-posts'
                                    key={d.id}
                                >
                                    <Link to='detailpost'>
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
                    </div>
                </div>
            </div>
        </section>
    );
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
        Posts: (data)=>{
            dispatch(actPost(data))
        }

    };
};
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Session_5);