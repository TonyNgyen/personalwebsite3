import BlogContainer from "@/components/BlogComponents/BlogContainer";
import BlogHeader from "@/components/BlogComponents/BlogHeader";
import BlogSection from "@/components/BlogComponents/BlogSection";
import React from "react";

function Page() {
  return (
    <BlogContainer>
      <div>
        <BlogHeader date="July 21, 2025">Summer Break And Plans</BlogHeader>
      </div>
      <BlogSection>
        It's been about a month of summer so far, and I've been busy with some
        projects, a job, and a potential start up! I haven't had much time to
        write blogs or notes yet, but I plan to catch up on that soon. And it
        starts with this blog!
      </BlogSection>
      <BlogSection>
        I have a new project that I have been using as a way to learn more about
        AWS! The project is not glamorous, it is a sort of advanced todo/goal
        planning app with recurring tasks and a calendar view. I do plan on
        using it myself, but I am not sure if I can release to the public since
        I believe I need to pay for some of the AWS services I want to use. I
        need to do more research about that. But other than that, I haven't had
        much time to work on it since I have been busy with another thing.
      </BlogSection>
      <BlogSection>
        And that thing is a startup with 2 of my friends! We are still in the
        early stages, but we have a lot of ideas and plans for it. We are all
        learning as we go, and it has been a great experience so far. We are
        currently working on a prototype and hope to have something to show
        soon. I will keep you updated on that!
      </BlogSection>
      <BlogSection>
        Finally... I've been working at a coffee/boba shop! It's been an okay
        experience so far to be honest, but I do enjoy the people I work with. I
        am mostly using it as a way to make some money while I work on my
        projects and pay off my tuition and rent for the next school year since
        graduate students do not get financial aid...
      </BlogSection>
      <BlogSection>
        That's about it for now! I will try to write more blogs and notes
        about my projects and experiences this summer. I have a lot of ideas
        that I want to work on, and I hope to share them with you all soon!
      </BlogSection>
    </BlogContainer>
  );
}

export default Page;
