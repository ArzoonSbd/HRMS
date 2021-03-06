import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssessmentDetailsComponent } from './assessment-details/assessment-details.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { CategoryComponent } from './category/category.component';
import { QuestionModelComponent } from './question-model/question-model.component';
import { MaintainQuestionComponent } from './maintain-question/maintain-question.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "result", component: ResultViewComponent},
  {path: "result/details/:id", component: DetailsViewComponent},
  {path: "assessment", component: AssessmentComponent},
  {path: "assessment/details/:id", component: AssessmentDetailsComponent},
  {path: "assessment/create", component: AddAssignmentComponent},
  {path: "category", component: CategoryComponent},
  {path: "question-model", component: QuestionModelComponent},
  {path: "maintain-question", component: MaintainQuestionComponent},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
