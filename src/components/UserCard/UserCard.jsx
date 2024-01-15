import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatedUserAvatar } from '../../redux/profileSettings/operations';
import { setAvatarURL } from '../../redux/profileSettings/slice';
import sprite from '../../assets/sprite.svg';
import { selectUserProfile } from '../../redux/profileSettings/selectors';

export const UserCard = ({ bmr, time }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfile);
  const [avatarPreviewURL, setAvatarPreviewURL] = useState(
    userProfile.avatarURL
  );
  const [showPreview, setShowPreview] = useState(true);
  const [previewStyle, setPreviewStyle] = useState({});
  const [avatarStyle, setAvatarStyle] = useState({});
  // const user = useSelector(selectCurrentUser)

  const handleAvatarChange = async (e) => {
    const newAvatarFile = e.target.files[0];

    if (newAvatarFile) {
      try {
        const blob = new Blob([newAvatarFile]);
        const objectURL = URL.createObjectURL(blob);
        setAvatarPreviewURL(objectURL);

        const data = await dispatch(updatedUserAvatar(newAvatarFile));
        console.log(newAvatarFile);
        e.target.form.reset();
      } catch (error) {
        console.error('Failed to create object URL:', error);
      }
    }
  };

  useEffect(() => {
    if (showPreview) {
      setPreviewStyle({ borderRadius: '50%', width: '100%', height: '100%' });
      setShowPreview(false);
    }
  }, [showPreview]);

  useEffect(() => {
    if (!showPreview) {
      setAvatarStyle({ width: '90px', height: '90px' });
    }
  }, [showPreview]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <form
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: '50%',
        }}
      >
        <input
          type="file"
          id="file-input"
          accept="image/*"
          onChange={handleAvatarChange}
          style={{ display: 'none' }}
        />
        <label
          htmlFor="file-input"
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <svg style={{ width: '24px', height: '24px' }}>
            <use href={sprite + '#icon-check-mark-1'} />
          </svg>
        </label>
      </form>
      <div>
        {avatarPreviewURL ? (
          <img
            src={avatarPreviewURL}
            alt="Preview"
            style={{ ...previewStyle, ...avatarStyle }}
          />
        ) : (
          <div>
            {!userProfile.avatarURL && (
              <svg>
                <use
                  href={sprite + '#icon-gridicons_user-1'}
                  style={{ fill: 'rgba(239, 237, 232, 0.1)' }}
                />
              </svg>
            )}
          </div>
        )}
      </div>
      {/* <p>{user.name}</p> */}
      <p>User</p>
      <div>
        <div>
          <svg style={{ width: '20px', height: '20px' }}>
            <use
              href={sprite + '#con-fluenit_food-24-filled'}
              style={{ fill: 'rgba(239, 137, 100, 1)' }}
            />
          </svg>
          <p style={{ color: '#ffffff' }}>Daily calorie intake</p>
          {/* <span>{Math.round(bmr)}</span> */}
          <span>0</span>
        </div>
        <div>
          <svg style={{ width: '20px', height: '20px' }}>
            <use
              href={sprite + '#icon-dumbbell'}
              style={{ fill: 'rgba(239, 137, 100, 1)' }}
            />
          </svg>
          <p style={{ color: '#ffffff' }}>Daily physical activity</p>
          <span>{time} min</span>
        </div>
      </div>
      <div>
        <svg style={{ width: '24px', height: '24px' }}>
          <use
            href={sprite + '#icon-Ellipse-1'}
            style={{
              fill: 'rgba(239, 160, 130, 1)',
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
          />
          <use
            href={sprite + '#icon-tabler_exclamation-mark'}
            style={{
              fill: 'rgba(239, 237, 232, 1)',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
            }}
          />
        </svg>
        <p>
        We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.
        </p>
      </div>
    </div>
  );
};
