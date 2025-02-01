import React from 'react';
import Image from 'next/image';
import SharedNavbar from '../../components/SharedNavbar';

export default function CookingJourneyBlog() {
  return (
    <>
      <SharedNavbar />
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 pb-16">
        <article className="container mx-auto px-4 max-w-4xl prose prose-lg dark:prose-invert">
          {/* Hero Image */}
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/img/food/biryani.jpg"
              alt="A plate of aromatic biryani"
              width={1200}
              height={400}
              className="object-cover object-bottom"
              priority
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Why I Love Cooking: A Journey from Roti Belna to Biryani
          </h1>
          
          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-8">
            <span>February 1, 2025</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <span>Lifestyle</span>
          </div>

          <p>
            Cooking has been an integral part of my life, but it wasn't something I truly 
            appreciated until I had to do it myself. Like many, my first experience with 
            cooking was as an assistant chef in my mom's kitchen. My responsibilities were 
            simple—rolling rotis, light frying, and fetching ingredients—but they gave me 
            an early exposure to the art of cooking. Little did I know that these small 
            tasks would one day turn into a full-fledged passion.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Necessity is the Mother of Invention
          </h2>
          <p>
            It was only when I moved to Bangalore and started living on my own that I 
            realized the true value of knowing how to cook. Eating out every day wasn't 
            sustainable, and instant noodles can only take you so far. So, I ventured 
            into the world of cooking—not as a hobby, but as a necessity. And as they 
            say, necessity is the mother of invention.
          </p>
          <p>
            I started small, replicating the simple home-cooked meals I had grown up with. 
            But cooking wasn't always smooth sailing. Some days, the food was overcooked, 
            other days undercooked. Sometimes, I went too easy on the salt, and sometimes, 
            I overcompensated. But each mistake taught me something new.
          </p>

          {/* After "Necessity is the Mother of Invention" section */}
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/img/food/butter-chicken.jpg"
                alt="Creamy butter chicken"
                width={600}
                height={300}
                className="object-cover object-bottom"
              />
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/img/food/matar-paneer.jpg"
                alt="Homemade matar paneer"
                width={600}
                height={300}
                className="object-cover object-bottom"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Cooking is Like Coding
          </h2>
          <p>
            One of the biggest reasons I fell in love with cooking is that it reminds me 
            of coding. There's a set of instructions to follow, a sequence of steps that, 
            when executed correctly, produce something wonderful. And just like coding, 
            even a small error—whether it's missing a semicolon in code or adding an 
            extra spoon of salt—can change the final outcome.
          </p>
          <p>
            The best part? The sense of achievement when everything comes together. Just 
            like debugging a tricky piece of code and finally seeing it run perfectly, 
            watching raw ingredients transform into a delicious dish is incredibly satisfying.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Learning, Experimenting, and Mastering
          </h2>
          <p>
            As I cooked more, I realized that learning to cook is a lot like learning any 
            new skill. The more you practice, the better you get. I started watching cooking 
            videos, asking friends and family for tips, and experimenting with different recipes. 
            Over time, my confidence grew, and I moved from basic meals to more complex dishes.
          </p>

          <p className="mb-4">Some of my favorite dishes to cook now are:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Butter Chicken</strong> – because nothing beats a rich, creamy, and flavorful curry.</li>
            <li><strong>Matar Paneer</strong> – a classic comfort dish with soft paneer and spicy gravy.</li>
            <li><strong>Chili Chicken</strong> – for when I crave something spicy and Indo-Chinese.</li>
            <li><strong>Honey Chilli Potato</strong> – crispy, sweet, and spicy, the perfect snack.</li>
            <li><strong>Biryani</strong> – a dish that demands patience but rewards you with layers of flavor.</li>
            <li><strong>Egg Halwa & Pudding</strong> – because no meal is complete without dessert.</li>
          </ul>

          {/* After the favorite dishes list */}
          <div className="grid grid-cols-3 gap-4 my-8">
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/img/food/chili-chicken.jpg"
                alt="Spicy chili chicken"
                width={400}
                height={200}
                className="object-cover object-bottom"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/img/food/honey-chilli-potato.jpg"
                alt="Crispy honey chilli potato"
                width={400}
                height={200}
                className="object-cover object-bottom"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="/img/food/egg-halwa.jpg"
                alt="Sweet egg halwa"
                width={400}
                height={200}
                className="object-cover object-bottom"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            Cooking as a Creative Outlet
          </h2>
          <p>
            Beyond just being a daily necessity, cooking has become a creative outlet for me. 
            The ability to tweak recipes, mix unexpected flavors, and come up with something 
            unique is thrilling. It's a skill that keeps evolving, and every dish is an 
            opportunity to learn something new.
          </p>
          <p>
            Looking back, I never thought I'd enjoy cooking as much as I do today. What 
            started as a need to survive has turned into something I genuinely love. Whether 
            it's the process, the experimentation, or the joy of sharing a meal with others, 
            cooking has become more than just a task—it's a passion.
          </p>
          <p className="mt-6">
            If you haven't tried your hand at cooking yet, I highly recommend it. Who knows? 
            You might just fall in love with it like I did.
          </p>
        </article>
      </div>
    </>
  );
} 