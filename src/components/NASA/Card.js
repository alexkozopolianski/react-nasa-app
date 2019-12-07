import React from 'react';

const AstronomyCard = (props) => {
	const { title,
	 url,
	 hdurl,
	 explanation,
	 date,
	 copyright,
	 media_type
	} = props.data;


	function renderContent() {
		switch(media_type) {

			case('video'):
				return (
					<iframe
						allowFullScreen
	    			frameBorder="0"
	    			height="520"
	    			width="720"
	    			src={url}>
    			</iframe>
				)

				case('image'):
					return (
						<a href={hdurl} className="astronomy-image-wrapper">
								<img src={url} alt={title} />
						</a>
		    	)

		    	default:
		    		return null
		}
	}

	return (
		<div className="card" style={{ margin: "auto"}}>
  			<div className="card-block">
    			<h4 className="card-title">{title}</h4>
    			<h6 className="card-subtitle text-muted">{date} {copyright}</h6>
  			</div>
  			<div  > {renderContent()}</div>
  			<div className="card-block">
    			<p className="card-text">{explanation}</p>
  			</div>
		</div>

	)
}

export default AstronomyCard;