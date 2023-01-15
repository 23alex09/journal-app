import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useSelector } from 'react-redux';

export const ImageGallery = () => {

    const { active: note } = useSelector( state => state.journal );

    return (
        <ImageList sx={ { width: '100%', height: 600 } } cols={ 4 } rowHeight={ 300 }>
            { note.imageUrls.map( ( url ) => (
                <ImageListItem key={ url }>
                    <img
                        src={ `${url}?w=164&h=164&fit=crop&auto=format` }
                        srcSet={ `${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x` }
                        alt='note img'
                        loading="lazy"
                    />
                </ImageListItem>
            ) ) }
        </ImageList>
    );
}

