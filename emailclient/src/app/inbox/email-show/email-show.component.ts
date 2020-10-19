import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email: Email;

  constructor(private emailService: EmailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.data.email;
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    });
  }

}
