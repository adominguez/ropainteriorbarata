import PropTypes from "prop-types";
import React, {useState} from "react";

const LoadVideo = ({ video, text }) => {
    const [showVideo, setVideoSelected] = useState(false);

    const getImageVideo = () => video.thumbnails.high.url;

	return (
        <div className="flex flex-col items-center md:flex-row">
            <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 md:pr-8 md:items-start md:text-left md:mb-0">
                <p className={`w-full leading-relaxed text-textColor-500 px-2 md:px-5`}>
                    {text}
                </p>
            </div>
            <div className="relative flex justify-center w-5/6 mt-4 lg:max-w-lg lg:w-full md:w-1/2">
                {
                    !showVideo ? 
                        <button className="relative border-4 border-transparent rounded-xl hover:border-secondary-300 focus:border-primary-500 focus:outline-none" onClick={() => setVideoSelected(true)}>
                            <span className="play-video-button"></span>
                            <picture className="relative">
                                <img loading="lazy" className="flex-shrink-0 object-cover object-center w-full rounded-lg" alt={video.title} src={getImageVideo()} />
                            </picture>
                            <div className="absolute bottom-0 w-full p-4 text-white bg-secondary-300 rounded-b-md">
                                {video.title}
                            </div>
                        </button>
                    :
                    <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        width="560"
                        height="315"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                        className="rounded-lg"
                    />
                }
            </div>
        </div>
	)
}

LoadVideo.propTypes = {
    video: PropTypes.object,
    openVideo: PropTypes.func
}

LoadVideo.defaultProps = {
	video: {}
}

export default LoadVideo;