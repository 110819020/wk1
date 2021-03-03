//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="fleud-container">
        <div className="header row">
            <div className="nav-span col-lg-0 col-md-0 col-2"></div>
            <div className="logo col-lg-2 col-md-12 col-8">
                <picture className="logo-img">
                    <source className="img-lg" media="(min-width: 992px)" srcSet="./img/img_nav_logo@992.png" />
                    <img src="./img/img_nav_logo@375.png" alt="" />
                </picture>
            </div>
            <div className="nav-btn col-lg-0 col-md-0 col-2">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon">&#9776</span>
                </button>
            </div>
            <div className="nav navbar navbar-expand-md col-lg-8 col-md-12 col-12">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link change-text-color" href="###">NEWS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link change-text-color" href="###">SCHEDULE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link change-text-color" href="###">MEMBER</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link change-text-color" href="###">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link change-text-color" href="###">FANCLUB</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-img width1280">
            <picture className="img-box container">
                <source className="img-lg" media="(min-width: 769px)" srcSet="./img/img_main_1280@1x.png 1x, ./img/img_main_1280@2x.png 2x" />
                <img src="./img/img_main_768.png" alt="main-img" />
            </picture>
        </div>
        <div className="main row width1280">
            <div className="major col-lg-8 col-md-12">
                <div className="news">
                    <div className="news-content">
                        <p className="title">NEWS</p>
                        <ul className="news-box">
                            <a href="https://sakurazaka46.com/s/s46/news/detail/E00003?ima=2458" className="news-link no-underline">
                                <li className="news-item">
                                    <div className="news-info">
                                        <p className="news-time">2020/11/09</p>
                                        <p className="news-sub">EVENT</p>
                                    </div>
                                    <p className="news-text">「デビューカウントダウンライブ！！」FC先行チケット発売中｜11月15日(日)23：59まで</p>
                                </li>
                            </a>
                            <a href="https://sakurazaka46.com/s/s46/news/detail/M00022?ima=2458" className="news-link no-underline">
                                <li className="news-item">
                                    <div className="news-info">
                                        <p className="news-time">2020/11/12</p>
                                        <p className="news-sub">MEDIA</p>
                                    </div>
                                    <p className="news-text">12月9日(水)18:30～フジテレビ「FNS歌謡祭 第2夜」に櫻坂46の出演が決定!</p>
                                </li>
                            </a>
                            <a href="https://sakurazaka46.com/s/s46/news/detail/M00018?ima=2458" className="news-link no-underline">
                                <li className="news-item">
                                    <div className="news-info">
                                        <p className="news-time">2020/11/11</p>
                                        <p className="news-sub">MEDIA</p>
                                    </div>
                                    <p className="news-text">藤吉夏鈴センター曲「なぜ　恋をして来なかったんだろう？」11/15(日)“こち星”にて初オンエア！</p>
                                </li>
                            </a>
                            <a href="https://sakurazaka46.com/s/s46/news/detail/R00014?ima=2458" className="news-link no-underline">
                                <li className="news-item">
                                    <div className="news-info">
                                        <p className="news-time">2020/11/11</p>
                                        <p className="news-sub">RELEASE</p>
                                    </div>
                                    <p className="news-text">1stシングル『Nobody's fault』商品収録内容決定！</p>
                                </li>
                            </a>
                        </ul>
                        <div className="see-more-btn">
                            <a className="see-more-link no-underline" href="https://sakurazaka46.com/s/s46/news/list?ima=2334&dy=202012">
                               <p className="see-more-text">More →</p> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-content">
                        <p className="title">BLOG</p>
                        <ul className="blog-box">
                            <li className="blog-item">
                                <a href="https://sakurazaka46.com/s/s46/diary/detail/36523?ima=2049&cd=blog" className="blog-link no-underline">
                                    <div className="blog-img-box">
                                        <img className="blog-img" srcSet="./img/img_blog_01_1280@1x.png 1x, ./img/img_blog_01_1280@2x.png 2x" 
                                        src="./img/img_blog_01_1280@1x.png" alt="blog-img" />
                                    </div>
                                    <div className="blog-info">
                                        <p className="blog-time">2020/11/14</p>
                                        <p className="member-name">大沼 晶保</p>
                                    </div>
                                    <p className="blog-name">愛が染みる。</p>
                                </a>
                            </li>                            
                            <li className="blog-item">
                                <a href="https://sakurazaka46.com/s/s46/diary/detail/36518?ima=2123&cd=blog" className="blog-link no-underline">
                                    <div className="blog-img-box">
                                        <img className="blog-img" srcSet="./img/img_blog_02_1280@1x.png 1x, ./img/img_blog_02_1280@2x.png 2x" 
                                        src="./img/img_blog_02_1280@1x.png" alt="blog-img" />
                                    </div>
                                    <div className="blog-info">
                                        <p className="blog-time">2020/11/13</p>
                                        <p className="member-name">小林 由依</p>
                                    </div>
                                    <p className="blog-name">ありふれた家族のきれいごとじゃない物語＊</p>
                                </a>
                            </li>  
                            <li className="blog-item">                          
                                <a href="https://sakurazaka46.com/s/s46/diary/detail/36513?ima=2148&cd=blog" className="blog-link no-underline">
                                    <div className="blog-img-box">
                                        <img className="blog-img" srcSet="./img/img_blog_03_1280@1x.png 1x, ./img/img_blog_03_1280@2x.png 2x" 
                                        src="./img/img_blog_03_1280@1x.png" alt="blog-img" />
                                    </div>
                                    <div className="blog-info">
                                        <p className="blog-time">2020/11/12</p>
                                        <p className="member-name">井上 梨名</p>
                                    </div>
                                    <p className="blog-name">いのりぶろぐ</p>
                                </a>
                            </li>
                            <li className="blog-item">
                                <a href="https://sakurazaka46.com/s/s46/diary/detail/36483?ima=2221&cd=blog" className="blog-link no-underline">
                                    <div className="blog-img-box">
                                        <img className="blog-img" srcSet="./img/img_blog_04_1280@1x.png 1x, ./img/img_blog_04_1280@2x.png 2x" 
                                        src="./img/img_blog_04_1280@1x.png" alt="blog-img" />
                                    </div>
                                    <div className="blog-info">
                                        <p className="blog-time">2020/11/11</p>
                                        <p className="member-name">山﨑 天</p>
                                    </div>
                                    <p className="blog-name">てんカメ「Nobody's fault」</p>
                                </a>
                            </li>
                        </ul>
                        <div className="see-more-btn">
                            <a className="see-more-link no-underline" href="https://sakurazaka46.com/s/s46/diary/blog?ima=2249">
                                <p className="see-more-text">More →</p> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondary col-lg-4 col-md-12 row">
                <div className="new-release col-lg-12 col-md-4 col-sm-12">
                    <div className="release-content pink-border">
                        <p className="aside-title">NEW RELEASE</p>
                        <a href="https://sakurazaka46.com/s/s46/discography/SRCL-11620?ima=1856" className="release-link">
                            <div className="release-info">
                                <div className="release-img-box">
                                    <img className="release-img" srcSet="./img/img_release_1280@1x.png 1x, ./img/img_release_1280@2x.png 2x" 
                                    src="./img/img_release_1280@1x.png" alt="new-release-img" />
                                </div>
                                <p className="release-text">Nobody's fault【初回仕様限定盤 TYPE-A】</p>
                            </div>
                        </a> 
                    </div>
                </div>
                <div className="video col-lg-12 col-md-4 col-sm-12">
                    <div className="video-content pink-border">
                        <p className="aside-title">VIDEO</p>
                        <a href="###" className="video-link">
                            <div className="video-info">
                                <div className="video-img-box">
                                    <img srcSet="./img/img_video_1280@1x.png 1x, ./img/img_video_1280@2x.png 2x" 
                                    src="./img/img_video_1280@1x.png" className="video-img" alt="video-img" />
                                </div>
                                <p className="video-text">櫻坂46 『Nobody's fault』</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="banner col-lg-12 col-md-4 col-sm-12">
                    <div className="banner-content pink-border">
                        <p className="aside-title">BANNER</p>
                        <div className="banner-info">
                            <div className="banner-img-box">
                                <a href="https://sakurazaka46.com/s/s46app/page_common/app_guide" className="banner-link">
                                    <img srcSet="./img/img_banner_01_1280@1x.png 1x, ./img/img_banner_01_1280@2x.png 2x"
                                    src="./img/img_banner_01_1280@1x.png" className="banner-img" alt="banner-img" />
                                </a>
                            </div>
                            <div className="banner-img-box">
                                <a href="https://keyahina-unisonair.com/" className="banner-link">
                                    <img srcSet="./img/img_banner_02_1280@1x.png 1x, ./img/img_banner_02_1280@2x.png 2x"
                                    src="./img/img_banner_02_1280@1x.png" className="banner-img" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="footer-content">
                <ul className="footer-box">
                    <div className="wrap">
                        <li className="footer-item">
                            <a href="###" className="footer-link">
                                <p className="footer-text">ABOUT</p>
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href="###" className="footer-link">
                                <p className="footer-text">PRODUCER</p>
                            </a>
                        </li>
                    </div>
                    <div className="wrap">
                        <li className="footer-item">
                            <a href="###" className="footer-link">
                               <p className="footer-text">FAQ</p> 
                            </a>
                        </li>
                        <li className="footer-item">
                            <a href="###" className="footer-link">
                                <p className="footer-text">CONTACT</p>
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
