'use client';

import { useEffect, useState } from 'react';
import { YouTubeVideo, getChannelVideos } from '@/lib/youtube-service';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function YouTubeSection() {
    const [videos, setVideos] = useState<YouTubeVideo[]>([]);

    useEffect(() => {
        getChannelVideos(4).then(channelVideos => {
            setVideos(channelVideos);
        });
    }, []);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Latest YouTube Tutorials
                    </h2>
                    <p className="text-xl text-gray-600">
                        Learn web development with our in-depth video tutorials
                    </p>
                    <a
                        href="https://www.youtube.com/@gems-coder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-600 hover:text-blue-700"
                    >
                        Visit our YouTube channel →
                    </a>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="!pb-12"
                    >
                        {videos.map((video) => (
                            <SwiperSlide key={video.id}>
                                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                                    <a
                                        href={`https://www.youtube.com/watch?v=${video.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block relative aspect-video"
                                    >
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <svg
                                                className="w-16 h-16 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </a>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                                            {video.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {video.description}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2">
                                            {new Date(video.publishedAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx global>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: #2563eb !important;
                }
                
                .swiper-pagination-bullet-active {
                    background: #2563eb !important;
                }
            `}</style>
        </section>
    );
} 