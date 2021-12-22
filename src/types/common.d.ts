declare type FrontendData = {
  job: string,
  gender: string,
  age: string,
  education: string,
  major: string,
  first_job: {
    tenure: string,
    leave: string,
    position: string,
    skill: string,
    render: string,
  },
  works: {
    window: string,
    market: string,
  },
  company: {
    industry: string,
    score: string,
    work: string,
    area: string,
    scale: string,
    people: string,
    job_tenure: string,
    salary: string,
    salary_score: string,
    industry_message: string,
  }
}

declare type UIData = {
  job: string,
  gender: string,
  age: string,
  education: string,
  major: string,
  first_job: {
    tenure: string,
    leave: string,
    content: string,
    skill: string,
    software: string,
  },
  works: {
    window: string,
  },
  company: {
    industry: string,
    score: string,
    work: string,
    area: string,
    scale: string,
    people: string,
    job_tenure: string,
    salary: string,
    salary_score: string,
    industry_message: string,
  }
}

declare type ReduxStoreData = {
  frontendData: {
    value: FrontendData[],
  },
  uiData: {
    value: UIData[],
  },
}
