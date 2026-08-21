const applications = [
    { id: 1, submittedAt: "2024-10-01", processingDays: 5 },
    { id: 2, submittedAt: "2024-10-03", processingDays: 2 },
    { id: 3, submittedAt: "2024-10-05", processingDays: 10 }
  ];
  
  function getOverdueApplications(applications) {
    const today = "2024-10-10";
  
    return applications
      .map(application => {
        // Create a Date object from the submission date.
        const completionDate = new Date(application.submittedAt);
  
        // Add the required processing days.
        completionDate.setDate(
          completionDate.getDate() + application.processingDays
        );
  
        // Return a new object with the required fields.
        return {
          id: application.id,
          expectedCompletion: completionDate
            .toISOString()
            .split("T")[0]
        };
      })
      .filter(application =>
        application.expectedCompletion < today
      );
  }
  
  console.log(getOverdueApplications(applications));