import List "mo:core/List";
import Text "mo:core/Text";

module {
  type OldInquiry = {
    name : Text;
    email : Text;
    message : Text;
  };

  type NewInquiry = {
    name : Text;
    email : Text;
    phone : Text;
    serviceType : Text;
    message : Text;
  };

  type OldActor = {
    inquiries : List.List<OldInquiry>;
    contactInfo : { email : Text; phone : Text; address : Text };
  };

  type NewActor = {
    inquiries : List.List<NewInquiry>;
  };

  public func run(old : OldActor) : NewActor {
    let newInquiries = old.inquiries.map<OldInquiry, NewInquiry>(
      func(oldInquiry) {
        {
          name = oldInquiry.name;
          email = oldInquiry.email;
          phone = "";
          serviceType = "";
          message = oldInquiry.message;
        };
      }
    );
    { inquiries = newInquiries };
  };
};
