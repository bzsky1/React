import { useLoaderData, useNavigate } from "react-router-dom";

export const User = () => {
    const { user } = useLoaderData();
    const { email, name, username, phone, website, address, company } = user;
    const navigate = useNavigate();


    return (
        <div className="user-page">
            <div className="container">
                <div className="user-page__main-block">
                    <div className="user-page__name-block">
                        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 20C18.1046 20 19.0454 19.0899 18.7951 18.0141C18.1723 15.338 16.0897 14 12 14C7.91032 14 5.8277 15.338 5.20492 18.0141C4.95455 19.0899 5.89543 20 7 20H17Z" stroke="#ffe647" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path fillRule="evenodd" clipRule="evenodd" d="M12 11C14 11 15 10 15 7.5C15 5 14 4 12 4C10 4 9 5 9 7.5C9 10 10 11 12 11Z" stroke="#ffe647" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        <div className="user-page__names">
                            <div className="user-page__name">{ name }</div>
                            <div className="user-page__username"> { username } </div>
                        </div>
                    </div>
                    <div className="user-page__info">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" stroke="#ffe647" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        :<div className="user-page__value margin"><a href={`mailto:${ email }`}> { email } </a></div>
                    </div>
                    <div className="user-page__info">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.09253 5.63644C4.91414 12.8995 11.1005 19.0859 18.3636 19.9075C19.3109 20.0146 20.1346 19.3271 20.3216 18.3922L20.7004 16.4979C20.8773 15.6135 20.4404 14.7202 19.6337 14.3168L18.3983 13.6992C17.5886 13.2943 16.6052 13.5264 16.062 14.2507C15.7082 14.7224 15.14 15.01 14.5962 14.782C12.7272 13.9986 10.0014 11.2728 9.21796 9.40381C8.99002 8.86004 9.27761 8.2918 9.7493 7.93802C10.4736 7.39483 10.7057 6.41142 10.3008 5.60168L9.68316 4.36632C9.27982 3.55963 8.38646 3.12271 7.50207 3.29959L5.60777 3.67845C4.67292 3.86542 3.98537 4.68912 4.09253 5.63644Z" stroke="#ffe647" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        :<div className="user-page__value margin"><a href={`tel:${ phone.slice(0, 12) }`}> { phone.slice(0, 12) } </a></div>
                    </div>
                    <div className="user-page__info">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M12 21C9.4651 18.3899 8 15.3051 8 12C8 8.69488 9.4651 5.61005 12 3M12 21C14.5349 18.3899 16 15.3051 16 12C16 8.69488 14.5349 5.61005 12 3M20 9H4M20 15H4" stroke="#ffe647" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        :<div className="user-page__value margin"><a href={ website }> { website } </a></div>
                    </div>
                    <div className="user-page__info">
                        <svg width="35px" height="35px" viewBox="0 0 1024 1024" fill="#ffe647" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffe647" strokeWidth="30.72"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z" fill=""></path></g></svg>
                        :<div className="user-page__value"> <b>{ address.city }</b>, { address.street }, { address.suite }, { address.zipcode }  </div>
                    </div>
                    <div className="user-page__info">
                        <svg fill="#ffe647" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 318.59 318.59" xmlSpace="preserve" stroke="#ffe647" strokeWidth="5.09744"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M106.949,62.947c0,28.861,23.482,52.342,52.346,52.342c28.861,0,52.343-23.48,52.343-52.342 c0-28.87-23.481-52.357-52.343-52.357C130.432,10.59,106.949,34.077,106.949,62.947z M200.632,62.947 c0,22.793-18.544,41.336-41.337,41.336c-22.795,0-41.34-18.543-41.34-41.336c0-22.801,18.545-41.351,41.34-41.351 C182.088,21.596,200.632,40.147,200.632,62.947z"></path> <path d="M60.633,60.531c-23.698,0-42.979,19.283-42.979,42.986c0,23.697,19.28,42.976,42.979,42.976 c23.693,0,42.97-19.279,42.97-42.976C103.603,79.814,84.326,60.531,60.633,60.531z M60.633,135.488 c-17.63,0-31.973-14.342-31.973-31.971c0-17.634,14.343-31.98,31.973-31.98c17.625,0,31.964,14.347,31.964,31.98 C92.597,121.146,78.258,135.488,60.633,135.488z"></path> <path d="M257.958,146.494c23.698,0,42.978-19.279,42.978-42.976c0-23.703-19.279-42.986-42.978-42.986 c-23.698,0-42.978,19.283-42.978,42.986C214.98,127.215,234.26,146.494,257.958,146.494z M257.958,71.537 c17.629,0,31.972,14.347,31.972,31.98c0,17.629-14.343,31.971-31.972,31.971c-17.63,0-31.973-14.342-31.973-31.971 C225.985,85.884,240.328,71.537,257.958,71.537z"></path> <path d="M276.814,154.236h-38.021c-3.478,0-6.901,0.438-10.23,1.284c-8.417-16.487-25.569-27.803-45.314-27.803h-2.422h-42.683 h-2.423c-19.78,0-36.957,11.356-45.357,27.892c-3.442-0.905-6.983-1.371-10.571-1.373H41.774C18.739,154.236,0,172.977,0,196.01 v106.487C0,305.536,2.463,308,5.503,308c3.039,0,5.503-2.464,5.503-5.503V196.01c0-16.965,13.803-30.768,30.769-30.768h38.022 c2.248,0.006,4.477,0.258,6.658,0.744c-1.027,4.023-1.575,8.236-1.575,12.576v123.935c0,3.039,2.464,5.503,5.503,5.503 s5.503-2.464,5.503-5.503V178.563c0-4.789,0.851-9.383,2.406-13.641c0.073-0.142,0.143-0.285,0.204-0.436 c0.082-0.199,0.147-0.401,0.204-0.604c5.495-13.811,18.495-23.84,33.94-25.028v19.985c0,3.039,2.464,5.504,5.503,5.504h5.435 l-14.829,108.76c-0.262,1.92,0.506,3.836,2.02,5.044l25.282,20.185c1.004,0.802,2.219,1.202,3.434,1.202 c1.214,0,2.429-0.4,3.433-1.202l25.284-20.184c1.515-1.209,2.281-3.125,2.02-5.045l-14.831-108.76h5.436 c3.04,0,5.503-2.465,5.503-5.504v-19.985c15.367,1.183,28.313,11.114,33.856,24.815c0.057,0.215,0.122,0.428,0.206,0.639 c0.081,0.203,0.175,0.397,0.276,0.585c1.563,4.265,2.416,8.869,2.416,13.669v123.935c0,3.039,2.464,5.503,5.503,5.503 c3.04,0,5.503-2.464,5.503-5.503V178.563c0-4.369-0.554-8.611-1.595-12.66c2.06-0.434,4.164-0.66,6.298-0.66h38.021 c16.967,0,30.771,13.803,30.771,30.768v106.487c0,3.039,2.464,5.503,5.503,5.503c3.039,0,5.503-2.464,5.503-5.503V196.01 C318.59,172.977,299.85,154.236,276.814,154.236z M175.323,138.724v14.614h-6.237h-19.203h-6.236v-14.614H175.323z M178.893,271.496l-19.409,15.494l-19.408-15.494l14.609-107.152h9.597L178.893,271.496z"></path> </g> </g></svg>
                        :<div className="user-page__value"> <b>{ company.name }</b>, { company.catchPhrase } </div>
                    </div>
                    <div className="user-page__close">
                        <svg 
                        onClick={() => {
                            navigate(-1);
                            document.querySelector('.edit-user-outlet').classList.remove('edit-todo-active');
                        }}
                        width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Close_Circle"> <path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                    </div>
                </div>
            </div>
        </div>
    );
};