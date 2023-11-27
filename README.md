```markdown
# Tenantly

Tenantly is a Django application that serves as a clone of NoBroker.com/rental-agreement, specifically focusing on rental agreements. It allows users to create rental agreements for their properties and provides a seamless dashboard experience for both users and admins. The application integrates the Paytm payments portal for convenient and secure payment processing.

## Features

- **User-friendly Dashboard:** An intuitive dashboard provides users with an overview of their rental agreement orders, making the process easy to manage.

- **Order Creation:** Users can effortlessly create rental agreement orders, providing all necessary details and information through a user-friendly interface.

- **Admin Panel:** Admins have access to a powerful admin panel where they can view and manage all user orders. This includes the ability to create discount coupon codes to enhance the user experience.

- **Paytm Integration:** The application seamlessly integrates with the Paytm payments portal, ensuring secure and efficient payment processing for users.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/MyRentAgreementApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MyRentAgreementApp
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations:

   ```bash
   python manage.py migrate
   ```

5. Create a superuser account (for accessing the admin panel):

   ```bash
   python manage.py createsuperuser
   ```

6. Run the development server:

   ```bash
   python manage.py runserver
   ```

7. Access the application at `http://127.0.0.1:8000/` and the admin panel at `http://127.0.0.1:8000/admin/`.

## Usage

1. Access the application and navigate to the rental agreement creation page.

2. Fill in the required details to create a new rental agreement order.

3. Explore the dashboard to manage and view your rental agreement orders.

4. Admins can log in to the admin panel to manage user orders and create discount coupon codes.

5. Complete the payment process using the integrated Paytm payments portal.

## Acknowledgments

- Thanks to NoBroker.com for the inspiration and reference.

## Contact

For any inquiries or issues, please contact Ketan More at moreketan2002@gmail.com.

```
