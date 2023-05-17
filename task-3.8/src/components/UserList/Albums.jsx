import { useLoaderData } from "react-router-dom";
import { getAlbums } from "../../users"


export const loader = async ({ params }) => {
    const albums = await getAlbums(params.userId);
    return { albums };
};

const bigFirstLetter = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};

export const Albums = () => {
    const { albums } = useLoaderData();

    return (
        <div className="albums">
            {albums.map((album) => {
                return (
                    <div className="album" key={album.id}>
                        <div className="album__title-word">Title<span className="yellow">:</span></div>
                        <div className="album__title"> { bigFirstLetter(album.title) } </div>
                    </div>
                );
            })}
        </div>
    )
};