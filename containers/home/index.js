import React from "react";

import { FeaturedMovie } from "@/components/featured-movie";
import { Categories } from "@/components/categories";
import { MoviesSection } from "@/components/movies-section";

function HomeContainer({
  popularMovies,
  topRatedMovies,
  categories,
  selectedCategory,
}) {
  return (
    <div>
      <FeaturedMovie
        movie={popularMovies && popularMovies[Math.floor(Math.random() * popularMovies?.length)]}
      />
      <Categories categories={categories?.slice(1, 5)} />
      {!!selectedCategory?.movies?.length && (
        <MoviesSection
          title={categories?.find(({ id }) => id === +selectedCategory?.id)?.name}
          movies={selectedCategory?.movies?.slice(1, 7)}
        />
      )}
      <MoviesSection title="POPÜLER FİLMLER" movies={popularMovies?.slice(1, 7)} />
      <MoviesSection
        title="FAVORİYE EKLEDİKLERİN"
        movies={topRatedMovies?.slice(1, 7)}
      />
    </div>
  );
}

export { HomeContainer };
