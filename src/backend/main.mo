import List "mo:core/List";
import Text "mo:core/Text";
import Migration "migration";

(with migration = Migration.run)
actor {
  type Inquiry = {
    name : Text;
    email : Text;
    phone : Text;
    serviceType : Text;
    message : Text;
  };

  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, serviceType : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      name;
      email;
      phone;
      serviceType;
      message;
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray();
  };
};

