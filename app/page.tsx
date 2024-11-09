"use client";
import React, { useState, useEffect } from "react";
import RandomCard from "@/components/RandomCard";
import { api } from "@/lib/axios";
import { ImageB } from "@/types/Image.interface";

async function loadImages() {
  try {
    const { data } = await api.get<ImageB[]>("/images/search?limit=1");
    return data;
  } catch (error) {
    console.log(error);
  }
}
function getRandomImage(imagesArray: ImageB[]) {
  const randomIndex = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[randomIndex];
}

function HomePage() {
  const [randomImg, setRandomImage] = useState<ImageB | null>(null);
  useEffect(() => {
    async function fetchRandomImage() {
      const images: ImageB[] | undefined = (await loadImages()) ?? [];
      if (images?.length !== 0) {
        const randomImg = getRandomImage(images);
        setRandomImage(randomImg);
      }
    }

    fetchRandomImage();
  }, []);

  return (
    <div className="container bg-white mt-5  p-6   shadow-md shadow-black -inset-40 block w-full h-full lg:w-2/4 mx-auto">
      <div className="float-right m-5 ">
        {randomImg && <RandomCard image={randomImg} />}
      </div>
      <h6 className="ml-auto mt-6 ">
        <p>
          Welcome to our dogs app We are excited to share with you our
          passion for these beautiful creatures and our app pays tribute to
          them.
        </p>
        <p>
          In our app, you can explore hundreds of photos of dogs of different
          breeds. The app uses the public API called api.thedogapi.com to obtain
          information about each breed and their respective image. From there,
          you can browse photos and learn more about each breed, their history,
          and unique characteristics.
        </p>
        <p>
          In addition, our app allows you to mark your favorite photos so you
          can come back to them later and show them to your friends and family.
          We&apos;re sure you&apos;ll find many photos you&apos;ll love!
        </p>

        <p>
          Thank you for choosing our app to explore the wonderful world of dogs.
          We hope you enjoy the experience and that it makes you smile as much
          as it does us. Have a great day!
        </p>
      </h6>
    </div>
  );
}

export default HomePage;
