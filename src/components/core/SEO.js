const SEO = (props) => {
    document.title = props.title
    document.querySelector('meta[name="description"]').content = props.description
    return (
        // document.title = props.title
        // document.querySelector('meta[name="description"]').content = props.description
    'Золотой партнер Битркис24 - компания DICOM, более 10 лет внедрений, более 20 крупных проектов.'
    )
}

export default SEO;