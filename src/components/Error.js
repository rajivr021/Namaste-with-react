import { useRouteError, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Error.css"; // We'll create this CSS file

const Error = () => {
  const error = useRouteError();
  // console.error("Route Error:", error);

  // Default error message if not provided
  const errorMessages = {
    404: {
      title: "Page Not Found",
      description:
        "The page you're looking for doesn't exist or has been moved.",
      emoji: "🔍",
    },
    500: {
      title: "Server Error",
      description: "Something went wrong on our end. Please try again later.",
      emoji: "🚧",
    },
    401: {
      title: "Unauthorized",
      description: "You don't have permission to access this page.",
      emoji: "🔒",
    },
    default: {
      title: "Oops! Something went wrong",
      description: "An unexpected error occurred. Please try again.",
      emoji: "😕",
    },
  };

  const errorData = errorMessages[error.status] || errorMessages.default;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="error-container"
    >
      <div className="error-card">
        {/* Error header with animated emoji */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="error-header"
        >
          <span className="error-emoji">{errorData.emoji}</span>
          <h1 className="error-title">{errorData.title}</h1>
          <p className="error-status">
            {error.status || "Error"}: {error.statusText || "Unexpected Error"}
          </p>
        </motion.div>

        {/* Error details */}
        <div className="error-content">
          <p className="error-description">{errorData.description}</p>

          {error.data && (
            <div className="error-details">
              <p className="error-details-title">Details:</p>
              <p className="error-details-text">{error.data}</p>
            </div>
          )}

          {/* Action buttons */}
          <div className="error-actions">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="error-button error-button-primary"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </motion.button>

            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="error-button error-button-secondary"
              >
                Go to Homepage
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="error-footer">
          Need help?{" "}
          <a href="mailto:support@example.com" className="error-link">
            Contact support
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Error;
