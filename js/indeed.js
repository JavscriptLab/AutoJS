(function ($)
{
  $(document)
    .ready(function()
    {
      if($(".index-hedMessage._success").length>0)
      {
        window.close();
      }

      var cacheappliedlinks=[];
      if(localStorage.getItem("cacheappliedlinks"))
      {
        cacheappliedlinks=JSON.parse(localStorage.getItem("cacheappliedlinks"));
      }

      $("#searchCount").css("cursor", "pointer").text("apply all")
      $("body")
        .on("click",
          "#searchCount",
          function()
          {
            var timeout=0;
            $("#resultsCol >.result")
              .each(function()
              {
                var link=$(this).find(".jobtitle a:first").attr("href");
                if(link&&cacheappliedlinks.indexOf(link)==-1&&$(this).text().split("MyCareersFuture.SG").length==1)
                {
                  cacheappliedlinks.push(link);
                  var joblink=$(this).find(".jobtitle a:first").attr("href");
                  setTimeout(function()
                    {
                      window.open(joblink, '_blank');
                    },
                    timeout);
                  timeout+=15000;
                }
              });
            localStorage.setItem("cacheappliedlinks", JSON.stringify(cacheappliedlinks));
          });
      setTimeout(function()
        {
          if($(".indeed-apply-button").length>0&&$(".indeed-apply-status-applied").length==0)
          {
            $(".indeed-apply-widget").trigger("click");
          }
          else
          {
            if($(".view-apply-button").length>0)
            {
              window.location.href=$(".view-apply-button").attr("href");
            }
          }

          if($(".indeed-apply-status-applied").length==1)
          {
            window.close();
          }
        },
        10000);

      setTimeout(function()
        {
          debugger;
          //// window.location.href=$("#action-bar .apply a").attr("href");
          $("#textarea-applicant.applicationMessage")
            .val(
              'From my previous experience as a software engineer and my ability to easily grasp different programming languages and new technologies I will be able to contribute my hundred percent to the company in quality,  skill, dedication and integrity. In this way i will be able to support the company in its future growth.\nstrengths:\nPassion for the profession\n I believe I can bring real passion and energy to this role. I have a strong desire to help others and develop as a professional, and this is already demonstrated through my voluntary work with X charity and my determination to self-fund and complete my ILSPA qualification while working part-time. My attitude has always been that if I am going to do something, I should put every effort into it, in order to succeed.\n Team player\n I’m a dedicated team player, which can be seen in the X project that I completed while working at X firm. Because the team launching this new service was spread across different offices, I set up daily Skype catch-up meetings to ensure we all knew how things were progressing and no one felt isolated. When a colleague was under pressure with his workload, I collaborated with the team to between us take on extra responsibilities so we didn’t miss the completion deadline. I thrive in a team environment and fully believe a team that is communicating well will be the most productive and successful.\n Able to work under time pressure\n I’m aware that this job involves time pressure and that you are looking for someone who can multitask and work across several projects at once, with regular deadlines throughout the year. While working at X firm I was responsible for administration of client accounts, setting up evening events and ordering office supplies. I used office management tools to schedule tasks and set up an electronic diary system for my colleagues across the team. When we re-platformed the company website, I was responsible for managing X and completed the project on time and on budget. Although there were very busy times and a few teething problems, I remained calm and in control and got the job done.Hopefully your succinct anecdotes will provide the meat on the bones that the interview panel is looking for and you will present yourself as someone ideal for the job on offer. ')
          $("#form-action-continue").trigger("click");
        },
        10000);
      if($(".has-error").length==0)
      {
        if($('.btn._medium.j-apply-btn[type="submit"][value="Apply"]').length>0)
        {
          $("#CandidatePhoneNumber").val("9605656508");
          setTimeout(function()
            {
              $('.btn._medium.j-apply-btn[type="submit"][value="Apply"]').trigger("click");
            },
            10000);
        }
      }
      else
      {
        setTimeout(function()
          {
            $('.btn._medium.j-apply-btn[type="submit"][value="Apply"]').trigger("click");
          },
          15000);
      }
    });



  setTimeout(function () {
    debugger;
    //// window.location.href=$("#action-bar .apply a").attr("href");
    $("[id='textarea-applicant.applicationMessage']").val('From my previous experience as a software engineer and my ability to easily grasp different programming languages and new technologies I will be able to contribute my hundred percent to the company in quality,  skill, dedication and integrity. In this way i will be able to support the company in its future growth.\nstrengths:\nPassion for the profession\n I believe I can bring real passion and energy to this role. I have a strong desire to help others and develop as a professional, and this is already demonstrated through my voluntary work with X charity and my determination to self-fund and complete my ILSPA qualification while working part-time. My attitude has always been that if I am going to do something, I should put every effort into it, in order to succeed.\n Team player\n I’m a dedicated team player, which can be seen in the X project that I completed while working at X firm. Because the team launching this new service was spread across different offices, I set up daily Skype catch-up meetings to ensure we all knew how things were progressing and no one felt isolated. When a colleague was under pressure with his workload, I collaborated with the team to between us take on extra responsibilities so we didn’t miss the completion deadline. I thrive in a team environment and fully believe a team that is communicating well will be the most productive and successful.\n Able to work under time pressure\n I’m aware that this job involves time pressure and that you are looking for someone who can multitask and work across several projects at once, with regular deadlines throughout the year. While working at X firm I was responsible for administration of client accounts, setting up evening events and ordering office supplies. I used office management tools to schedule tasks and set up an electronic diary system for my colleagues across the team. When we re-platformed the company website, I was responsible for managing X and completed the project on time and on budget. Although there were very busy times and a few teething problems, I remained calm and in control and got the job done.Hopefully your succinct anecdotes will provide the meat on the bones that the interview panel is looking for and you will present yourself as someone ideal for the job on offer. ')
    $("#form-action-continue").trigger("click");
    $("#form-action-submit").trigger("click");

    if ($("#ia_success:visible").length > 0) {
      window.top.close();
      window.close();
    }

  }, 10000);
})(myjQuery);