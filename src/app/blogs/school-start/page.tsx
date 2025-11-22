import BlogContainer from "@/components/BlogComponents/BlogContainer";
import BlogHeader from "@/components/BlogComponents/BlogHeader";
import BlogSection from "@/components/BlogComponents/BlogSection";
import React from "react";

function Page() {
  return (
    <BlogContainer>
      <div>
        <BlogHeader date="July 21, 2025">Life Update and School</BlogHeader>
      </div>
      <BlogSection>
        It&lsquo;s been 6 weeks since summer ended and school started. This
        means it&lsquo;s time for an update for what I&lsquo;ve been up to and a
        reflection of what&lsquo;s happened since my last note.
      </BlogSection>
      <BlogSection>
        First, my part time job at the cafe was nice. I met some great people
        and made some money to pay for a couple months of rent. It also gave me
        insight into the food service industry, and what the workers, managers,
        and owners deal with. Although I hope to not return to a food service
        job since I want to build software, it made me appreciate even more what
        they go through.
      </BlogSection>
      <BlogSection>
        Next is the startup with my friends. We got a good amount of work done,
        but nothing like an MVP I&lsquo;d say. It was a learning experience for
        all of us, and it eventually fell through when we all got busier with
        other parts of our lives and couldn&lsquo;t dedicate more time to it. Looking
        back, there are a lot of things I would&lsquo;ve done differently which
        I&lsquo;ll take as lessons moving forward.
      </BlogSection>
      <BlogSection>
        School has started! I am entering my Master&lsquo;s Program for Computer
        Science with a specialization in AI. The coursework has been
        challenging, but that&lsquo;s to be expected. I&lsquo;m learning a lot
        from all my classes, especially my AI classes which I kind of want to
        experiment with my main project, Mise (this name is temporary). Although
        it has taken a lot of time from my projects, I&lsquo;m learning more and
        getting an education which is better than nothing, and I will not take
        the opportunity for granted.
      </BlogSection>
      <BlogSection>
        Speaking of Mise, I have made a lot of progress on it. The core
        functionality is there, and I&lsquo;m working on polishing the UI and
        UX. I&lsquo;m currently using it personally to see if there are any bugs
        and improvements I can make with the user flow. I&lsquo;m excited to
        share it with others once it&lsquo;s ready! The name will be tricky
        since there is another company within the culinary space with the same
        name, so I am currently trying to think of new names.
      </BlogSection>
      <BlogSection>
        That&lsquo;s about it for now! I hope all goes well with school, my
        projects, and my overall career, and I hope to have an update soon!
      </BlogSection>
    </BlogContainer>
  );
}

export default Page;
